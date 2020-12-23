import {BedgetItem} from "../shared/models/budget-item/budget-item-model"

export interface UpdateAmount {
    old:BedgetItem;
    new:BedgetItem;
}
