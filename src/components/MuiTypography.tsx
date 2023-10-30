import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      {/* gutterBottom create a gutter margin underneath of 0.35em*/}
      <Typography variant="h1" gutterBottom>
        H1 Heading
      </Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>

      {/* We can use the component prop to change the semnatic value of the tag but keep the variant the same*/}
      <Typography variant="h4" component="h1">
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* body1 is the default variant for MUI Typography*/}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        sapiente.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        nostrum?
      </Typography>
    </div>
  );
};

export default MuiTypography;
