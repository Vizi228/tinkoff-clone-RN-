import { IFooterItem } from "../../../layouts/footer/types";

export interface IOtherItem extends Pick<IFooterItem, 'iconName'> {
  title: string,
}