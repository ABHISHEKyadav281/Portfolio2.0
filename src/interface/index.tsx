export interface ProjectProps {
    activeProject?: any|null;
    setActiveProject?: any|null;
}

export interface ModalState {
  active: boolean;
  index: number;
}

export interface ProjectGalleryProps {
  index: number;
  title: string;
  setModal: (state: ModalState) => void;
}

// interface/ModalProps.ts
export interface ModalProps {
  modal: ModalState
  projectGallery: {
    src: string;
    title: string;
    color: string;
    url: string;
  }[]
  parentRef: any;
}
