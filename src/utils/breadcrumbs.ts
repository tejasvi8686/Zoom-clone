import {
    NavigateFunction
} from "react-router-dom";
import { BreadCrumbsType } from "./Types";

export const getCreateMettingBreadCrumbs = (navigate: NavigateFunction) : Array<BreadCrumbsType > => [
    {
        text: "Dashboard",
        href: "#",
        onClick: () => {
            navigate("/");
        },
    },
    {
        text: "create Meeting",
    },
];