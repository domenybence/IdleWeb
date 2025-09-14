import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { Talents } from "./pages/talents/talents";

export const routes: Routes = [
    { path: "", component: Home },
    { path: "talents", component: Talents}
];
