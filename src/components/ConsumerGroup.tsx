import { useDrop } from "react-dnd";
import Consumer from "./Consumer";

function ConsumerGroup() {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CONTENT_EVENT",
      hover(item: { type: number }, monitor) {},
      drop: (item: { type: number }, monitor) => {},
      canDrop: (item: { type: number }, monitor) => {
        return true;
        // return item.type === acceptTypeVar;
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    })
    // [x, y]
  );
  return (
    <div
      ref={drop}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "fit-content",
        gap: "20px",
        alignSelf: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <Consumer id={0} onEvent={isOver} />
        <Consumer id={1} onEvent={isOver} />
        <Consumer id={2} onEvent={isOver} />
        <Consumer id={3} onEvent={isOver} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <Consumer id={4} onEvent={isOver} />
        <Consumer id={5} onEvent={isOver} />
        <Consumer id={6} onEvent={isOver} />
        <Consumer id={7} onEvent={isOver} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <Consumer id={8} onEvent={isOver} />
        <Consumer id={9} onEvent={isOver} />
        <Consumer id={10} onEvent={isOver} />
        <Consumer id={11} onEvent={isOver} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <Consumer id={12} onEvent={isOver} />
        <Consumer id={13} onEvent={isOver} />
        <Consumer id={14} onEvent={isOver} />
        <Consumer id={15} onEvent={isOver} />
      </div>
    </div>
  );
}

export default ConsumerGroup;