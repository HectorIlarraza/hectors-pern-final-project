import { useState } from "react";
import { Box, RangeSelector, Stack, Text } from 'grommet';


export const Thin = ({ initialRange = [0, 5], label }) => {
  const RANGE_MIN = 0;
  const RANGE_MAX = 5;
  const [range, setRange] = useState(initialRange);

  return (
    <Box gap="small" pad="xlarge">
      {label ? <Text>{label}</Text> : null}
      <Stack>
        <Box background="light-4" height="6px" direction="row" />
        <RangeSelector
          direction="horizontal"
          min={RANGE_MIN}
          max={RANGE_MAX}
          step={1}
          values={range}
          onChange={nextRange => {
            setRange(nextRange);
          }}
        />
      </Stack>
      <Box align="center">
        <Text size="small">{`${range[0]}⭐️ - ${range[1]}⭐️`}</Text>
      </Box>
    </Box>
  );
}