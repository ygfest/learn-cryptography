"use client";

import { Button } from "@/components/ui/button";
import { Heading, Text } from "@chakra-ui/react";
import React, { useReducer } from "react";

type StateProps = {
  titles: string[];
  title: string;
};
type ActionProps =
  | { type: "SET_TITLE"; payload: string }
  | { type: "ADD_TITLE"; payload: string };

function page() {
  const [state, dispatch] = useReducer(
    (state: StateProps, action: ActionProps): StateProps => {
      switch (action.type) {
        case "SET_TITLE":
          return { ...state, title: action.payload };
        case "ADD_TITLE":
          return {
            ...state,
            titles: [...state.titles, action.payload],
            title: "",
          };
        default:
          return state;
      }
    },
    { titles: [], title: "" }
  );
  return (
    <div className="mt-24">
      <Heading>
        <Text color={"green.600"} textStyle={"bold"}>
          {state.title}
        </Text>
      </Heading>
      <input
        type="text"
        value={state.title}
        onChange={(e) =>
          dispatch({ type: "SET_TITLE", payload: e.target.value })
        }
        className="bg-inherit border-4 p-4 text-red-500 text-3xl"
      />
      <Button
        bgColor={"blue.400"}
        p={4}
        onClick={() => dispatch({ type: "ADD_TITLE", payload: state.title })}
      >
        ADD TITLE
      </Button>
    </div>
  );
}

export default page;
