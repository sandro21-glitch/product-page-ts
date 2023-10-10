type OverlayType = {
  isOpen: boolean;
};
const Overlay = ({ isOpen }: OverlayType) => {
  return (
    <div
      className={`${
        isOpen ? "opacity-[75%]" : "opacity-0 hidden"
      }  bg-Black w-full h-full fixed left-0 top-0 bottom-0 right-0 z-[1]`}
    ></div>
  );
};
export default Overlay;
