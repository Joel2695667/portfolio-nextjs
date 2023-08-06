import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";


export const temoignageSlice = createSlice({
  name: "temoignage",
  initialState: {
    "1": {
      id: "1",
      nom: "Alain Jules",
      profession: "Juriste",
      description: "J'aime bien votre Portfolio, c'est professionel"
    },
    "2": {
      id: "2",
      nom: "Anaelle",
      profession: "Medecin",
      description: "J'aime bien votre Portfolio, c'est professionel"
    },
  },
  reducers: {
    createTemoignage(state, action) {
        const payload = action.payload;
        const id = v4();
        return {...state, [id]: {...payload, id}};
    },
    updateTemoignage(state, action) {
        const payload = action.payload;
        return {...state, [payload.id]: {...state[payload.id], ...payload}};
    },
  },
});

export const { createTemoignage, updateTemoignage } = temoignageSlice.actions;

export default temoignageSlice.reducer;