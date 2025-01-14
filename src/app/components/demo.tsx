import { Button } from "@/components/ui/button";
import { Stack } from "@chakra-ui/react";

export const Demo = () => {
  return (
    <Stack direction="row" gap="4" align="center">
      <Button loading>Click me</Button>
      <Button loading loadingText="Saving...">
        Click me
      </Button>
    </Stack>
  );
};
