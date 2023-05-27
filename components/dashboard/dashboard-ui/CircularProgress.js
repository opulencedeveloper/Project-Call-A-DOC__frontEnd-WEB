import styles from "./CircularProgress.module.css";


const {
  circular_progress,
  track_bar,
  progress_bar,
  stroke_dasharray,
  progress_bar_data_state,
  progress_bar_no_data_state,
} = styles;

const CircularProgress = (props) => {
  const {
    labelValue,
    orientation,
    trackBarColor,
    trackBarThickness,
    barColor,
    barThickness,
    circleHeight,
    circleWidth,
    fontSize,
    textColor,
    textFontStyle,
    circleRadius,
    labelState,
  } = props;

  const setLabelState = labelState;
  const value = labelValue || 0; //integer between 0 - 100
  console.log("labelValue", value);
  const valueFontSize = fontSize || "text-3xl";
  const valueColor = textColor || ""; //in hex
  const fontStyle = textFontStyle || "font-semibold";
  const progressHeight = circleHeight || "140";
  const progressWidth = circleWidth || "140";
  const transform = orientation || "transform -rotate-90"; //circle rotation
  const progressTrackColor = trackBarColor || "stroke-[#e0e0e0]"; //Default progress bar color
  const progressTrackThickness = trackBarThickness || "stroke-[10px]"; //Progress bar thickness
  const strokeDashArray = stroke_dasharray; //Circumference of the circle (2 * pi * radius)
  const progressBarColor = barColor || "stroke-[#9E77D1]";
  const progressBarThickness = barThickness || "stroke-[10px]";
  const radius = circleRadius || "45";

  const normalizedValue = Math.min(Math.max(value, 1), 100); // Ensure value stays within 1 to 100

  // Calculating the stroke-dashoffset based on the value
  const circumference = 2 * Math.PI * 50; // Assuming the radius of the circle is 50
  const offset = circumference - (normalizedValue / 100) * circumference;
  return (
    <svg
      className={` ${transform} ${circular_progress}`}
      width={progressWidth}
      height={progressHeight}
      viewBox="-70 -70 140 140"
    >
      <circle
        fill="none"
        className={`${progressTrackColor} ${progressTrackThickness} ${strokeDashArray}`}
        cx="0"
        cy="0"
        r="45"
      />
      <circle
        fill="none"
        className={`${progressBarColor} ${progressBarThickness} ${strokeDashArray}`}
        cx="0"
        cy="0"
        r={radius}
        style={{
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 0.3s ease",
        }}
      />
      <text
        className={`${fontStyle} ${valueFontSize} text-custom`}
        fill={valueColor}
        transform="rotate(90)"
        x="0"
        y="0"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {setLabelState && value}
      </text>
    </svg>
  );
};

export default CircularProgress;
