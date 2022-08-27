import { deepFreeze } from "grommet/utils"

export const customTheme = deepFreeze(
    {
        "global": {
            "font": {
                "family": "Roboto",
            },
            "colors": {
                "brand": "#FECC02",
                "focus": "#006AA7",
                "accent-1": "#006AA7",
            }
        },
        "heading": {
            "font": {
                "family": "Lato",
            },
            "weight": "bold",
        },
    }
);