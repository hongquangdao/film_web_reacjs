import React from "react";
import { Pagination } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
       mode: 'dark'
    },
})

const CustomPagination = ({ setPage, numofPages = 100 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div
            style={{
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10
            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numofPages}
                    variant="outlined"
                    size="large"
                    siblingCount={0}
                />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination