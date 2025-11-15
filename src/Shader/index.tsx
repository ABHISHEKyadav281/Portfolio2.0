export const vertexShader = `
uniform vec2 uDelta;
varying vec2 vUv;

float PI = 3.14159265359;

void main() {
    vUv = uv;
    vec3 newPosition = position;
    newPosition.x += sin(uv.y * PI) * uDelta.x * 0.005;
    newPosition.y += sin(uv.x * PI) * uDelta.y * 0.005;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

export const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uOpacity;


void main() {
    vec3 tex = texture2D(uTexture, vUv).rgb;
    gl_FragColor = vec4(tex, uOpacity);
}
`;
