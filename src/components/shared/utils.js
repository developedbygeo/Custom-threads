import { flexMixin, gridMixin } from './mixins';

export const getColor =
  (clr) =>
  ({ theme }) =>
    theme.colors[clr];

export const getLayout = ({ flexSettings, gridSettings }) => {
  if (flexSettings) {
    return flexMixin(flexSettings.justify, flexSettings.align, flexSettings.dir);
  }
  if (gridSettings) {
    return gridMixin(gridSettings.cols, gridSettings.rows, gridSettings?.gap);
  }
};
