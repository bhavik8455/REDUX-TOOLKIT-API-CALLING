import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchtodos = createAsyncThunk("fetcg-todo", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
})
const todoslice = createSlice({
    name: "todos",
    initialState: {
        isLoding: false,
        data: null,
        isError: false,


    },
    extraReducers: (builder) => {
        builder.addCase(fetchtodos.pending, (state, action) => {
            state.isLoding = true;

        });
        builder.addCase(fetchtodos.fulfilled, (state, action) => {
            state.isLoding = false;
            state.data = action.payload;

        });
        builder.addCase(fetchtodos.rejected, (state, action) => {
            state.isError = true;


        });


    },



});

export default todoslice.reducer;