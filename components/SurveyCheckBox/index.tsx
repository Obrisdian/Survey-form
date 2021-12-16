import { useFormContext } from "react-hook-form";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import theme from "../../theme";
import { lineHeight } from "@mui/system";


const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const InputInfo = [
  {
    id: 1,
    Label: "Front-end Projects",
    Value: "front-end-projects",
  },
  {
    id: 2,
    Label: "Back-end Projects",
    Value: "back-end-projects",
  },
  {
    id: 3,
    Label: "Data Visualization",
    Value: "data-vizualisation",
  },
  {
    id: 4,
    Label: "Challenges",
    Value: "challenges",
  },
  {
    id: 5,
    Label: "Open Source Community",
    Value: "open-source-community",
  },
  {
    id: 6,
    Label: "Gitter help rooms",
    Value: "gitter-help-rooms",
  },
  {
    id: 7,
    Label: "Videos",
    Value: "videos",
  },
  {
    id: 8,
    Label: "City Meetups",
    Value: "city-meetups",
  },
  {
    id: 9,
    Label: "Wiki",
    Value: "wiki",
  },
  {
    id: 10,
    Label: "Forum",
    Value: "forum",
  },
  {
    id: 11,
    Label: "Additional Courses",
    Value: "additional-courses",
  },
  {
    id: 12,
    Label: "Any comments or suggestions",
    Value: "any-comments-or-suggestions",
  },
];

export const CheckBox = () => (
  <ConnectForm>
    {({ register }: any) => (
      <FormGroup style={{marginLeft:"196px", marginTop:"127px"}}>
        {InputInfo.map((info, index) => (
          <FormControlLabel style={{ color:theme.palette.info.main, fontSize:"18px"}}
            key={index}
            control={<Checkbox  style={{ color:theme.palette.info.main, width:"15px", height:"14px"}}/>}
            label={info.Label}
            value={info.Value}
            {...register("toImprove")}
          />
        ))}
      </FormGroup>
    )}
  </ConnectForm>
);