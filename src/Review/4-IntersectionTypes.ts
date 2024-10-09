type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textbox: UIWidget = {
	drag: () => console.log('dragging'),
	resize: () => console.log('resizing'),
};
