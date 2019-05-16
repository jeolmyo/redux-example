import { createStore } from "redux";

const CHECKIN = "@action/checkin";
const CHECKOUT = "@action/checkout";

const initializeState = {
  checkInStatus: false,
  checkOutStatus: false,
  visitorName: "",
  checkInTimestamp: 0,
  checkoutTimestamp: 0
};

function reducer(state = initializeState, action) {
  switch (action.type) {
    case CHECKIN:
      return {
        ...state,
        visitorName: action.payload.visitorName,
        checkInStatus: true,
        checkInTimestamp: Date.now(),
        checkOutTimestamp: 0
      };
    case CHECKOUT:
      return {
        ...state,
        checkInStatus: true,
        checkOutStatus: true,
        checkOutTimestamp: Date.now()
      };
    default:
      return {
        ...state
      };
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: CHECKIN,
  payload: {
    visitorName: "mingook"
  }
});

store.dispatch({
  type: CHECKOUT,
  payload: {
    visitorName: "mingook"
  }
});

store.dispatch({
  type: CHECKIN,
  payload: {
    visitorName: "melong"
  }
});
