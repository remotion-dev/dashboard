import { random } from "remotion";
import { useCompany } from "./company";
import { lunchRoulette } from "./employees";
import { useTheme } from "./theme";
import { useDate } from "./use-date";

export const LunchMandate = () => {
  const date = useDate();
  const theme = useTheme();
  const company = useCompany();

  const lunchMandate = lunchRoulette.sort((a, b) => {
    return random(date + a.name) - random(date + b.name);
  });

  const taglines = [
    "We trust in",
    "What an honor!",
    "We have nominated:",
    "We have a winner!",
  ].sort((a, b) => {
    return random(date + a + company) - random(date + company + b);
  });

  return (
    <div
      style={{
        color: "black",
        background: "#eee",
        padding: 20,
      }}
    >
      <em> {taglines[0]}</em>
      <h1
        style={{
          marginBottom: 5,
        }}
      >
        {lunchMandate[0].name}
      </h1>
      <div>
        <div>
          <strong> has been delegated to pick up lunch today.</strong>
        </div>{" "}
        <br></br>
        {lunchMandate[1].name.split(" ")[0]}
        {" and "}
        {lunchMandate[2].name.split(" ")[0]} have been nominated as deputies.
        Congrats!
      </div>
    </div>
  );
};
