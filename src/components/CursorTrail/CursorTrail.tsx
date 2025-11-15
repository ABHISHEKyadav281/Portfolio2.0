import { Component, createRef } from "react";

class Point {
  x: number;
  y: number;
  lifetime: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }
}

interface CursortrailState {
  cHeight: number;
  cWidth: number;
}

class Cursortrail extends Component<{}, CursortrailState> {
  state: CursortrailState = {
    cHeight: typeof window !== "undefined" ? window.innerHeight : 0,
    cWidth: typeof window !== "undefined" ? window.innerWidth : 0,
  };

  Cursortrail = createRef<HTMLCanvasElement>();
  private mouseMoveHandler?: (e: MouseEvent) => void;

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);

    if (matchMedia("(pointer:fine)").matches) {
      this.startAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.mouseMoveHandler) {
      document.removeEventListener("mousemove", this.mouseMoveHandler);
    }
  }

  handleResize = () => {
    this.setState(
      {
        cHeight: window.innerHeight,
        cWidth: window.innerWidth,
      },
      () => {
        const canvas = this.Cursortrail.current;
        if (canvas) {
          canvas.width = this.state.cWidth;
          canvas.height = this.state.cHeight;
        }
      }
    );
  };

  startAnimation = () => {
    const canvas = this.Cursortrail.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Always set size at start
    canvas.width = this.state.cWidth;
    canvas.height = this.state.cHeight;

    const points: Point[] = [];

    const addPoint = (x: number, y: number) => {
      points.push(new Point(x, y));
    };

    this.mouseMoveHandler = (e: MouseEvent) => {
      addPoint(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", this.mouseMoveHandler);

    const animatePoints = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const duration = (0.7 * 1000) / 60;

      for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        const lastPoint = points[i - 1] || point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          points.shift();
          i--;
        } else {
          const lifePercent = point.lifetime / duration;
          const spreadRate = 7 * (1 - lifePercent);

          ctx.lineJoin = "round";
          ctx.lineWidth = spreadRate;

          const red = Math.floor(190 - 190 * lifePercent);
          const green = 0;
          const blue = Math.floor(210 + 210 * lifePercent);
          ctx.strokeStyle = `rgb(${red},${green},${blue})`;

          ctx.beginPath();
          ctx.moveTo(lastPoint.x, lastPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animatePoints);
    };

    animatePoints();
  };

  render() {
    const { cHeight, cWidth } = this.state;
    return (
      <canvas
        ref={this.Cursortrail}
        width={cWidth}
        height={cHeight}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: cWidth,
          height: cHeight,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    );
  }
}

export default Cursortrail;
