import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from "@angular/router";
import { MessageService } from "./messages/message.service";
import { Message } from "./messages/message.model";
import { PlatformService } from "./platform.service";

@Injectable()
export class TermsGuard {

    constructor(private messages: MessageService,
                private router: Router, 
                private ps: PlatformService) { }

    canActivate(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Promise<boolean> | boolean {

        if (route.params["mode"] == "create") {

            return new Promise<boolean>(resolve => {
                let responses: [string, () => void][] 
                    = [["Yes", () => resolve(true)], 
                        ["No",  () => resolve(false)]];
                this.messages.reportMessage(
                    new Message("Do you accept the terms & conditions?", 
                        false, responses));
            });
        } else {
            return true;
        }
    }


    canActivateChild(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Promise<boolean> | boolean {

        if ((!this.ps.isServer) && route.url.length > 0
            && route.url[route.url.length - 1].path == "categories") {

            return new Promise<boolean>((resolve, reject) => {
                let responses: [string, (arg: string) => void][] = [
                    ["Yes", () => resolve(true)],
                    ["No ", () => resolve(false)]
                ];

                this.messages.reportMessage(
                    new Message("Do you want to see the categories?",
                        false, responses));
            });
        } else {
            return true;
        }
    }
}
