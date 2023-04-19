import { RootState } from "../store";

//selector - this is func return state for (const {pizzas, loadingStatus } = useSelector(pizzaSelector)) , like method createSelector from redux Toolkit, but hand-made :
export const pizzaSelector = (state:RootState) => state.pizzas;