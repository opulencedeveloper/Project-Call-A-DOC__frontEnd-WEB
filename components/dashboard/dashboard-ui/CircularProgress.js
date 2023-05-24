import styles from "./CircularProgress.module.css";

//class for data state => progress_bar_data_state
//class for no data state => progress_bar_no_data_state

const {
  circular_progress,
  track_bar,
  progress_bar,
  progress_bar_data_state,
  progress_bar_no_data_state,
} = styles;

const CircularProgress = ({ value }) => {
  const normalizedValue = Math.min(Math.max(value, 1), 100); // Ensure the value stays within 1 to 100

  // Calculate the stroke-dashoffset based on the value
  const circumference = 2 * Math.PI * 50; // Assuming the radius of the circle is 50
  const offset = circumference - (normalizedValue / 100) * circumference;

  return (
    <svg
      className={circular_progress}
      width="140"
      height="140"
      viewBox="-70 -70 140 140"
    >
      <circle className={track_bar} cx="0" cy="0" r="45" />
      <circle
        className={`${progress_bar} ${progress_bar_no_data_state}`}
        cx="0"
        cy="0"
        r="45"
        style={{ strokeDashoffset: offset }}
      />
      <text
        className="text-3xl font-semibold"
        transform="rotate(90)"
        x="0"
        y="0"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {value}
      </text>
    </svg>
  );
};

export default CircularProgress;
