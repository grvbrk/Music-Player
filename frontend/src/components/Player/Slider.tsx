function Slider() {
  return (
    <div>
      <div id="time" className="flex justify-between text-xs">
        <p>0:00</p>
        <p>4:51</p>
      </div>
      <div
        id="slider"
        className="bg-black w-[100%] h-[3px] rounded-xl"
      ></div>
    </div>
  );
}

export default Slider;
