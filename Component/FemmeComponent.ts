import {Femme} from '../Model/Femme'
import {Component} from "@angular/core"
@Component({
    selector: "Femme-ui",
    templateUrl: "../UI/Femme.html"
})
export class FemmeComponent {
    CurrentFemme:Femme = new Femme();
}