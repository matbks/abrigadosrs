import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  // Initial color mode and configuration
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    avatar: {
      light: {
        backgroundColor: "#2c3e50",
        color: "#e67e22",
      },
      dark: {
        backgroundColor: "#2c3e50",
        color: "#1abc9c",
      },
    },
    button: {
      light: {
        backgroundColor: "#2c3e50",
        color: "#e67e22", 
      },
      dark: {
        backgroundColor: "#Ecf0f1",
        color: "#e67e22",
      },
    },
    icon: {
      light: {
        backgroundColor: "#2c3e50",
        color: "#e67e22", 
      },
      dark: {
        backgroundColor: "#Ecf0f1",
        color: "#e67e22",
      },
    },
    text: {
      light: {
        backgroundColor: "#2c3e50",
        color: "#e67e22", 
      },
      dark: {
        backgroundColor: "#Ecf0f1",
        color: "#e67e22",
      },
    }
  },
  // Global styles for light and dark mode
  styles: {
    global: (props) => ({
      "html, body, #root": {
        color: props.colorMode === "dark" ? "#ecf0f1" : "#2c3e50", 
        backgroundColor: props.colorMode === "dark" ? "#2c3e50" : "#ecf0f1",
        height: "100%",
        width: "100%",
      },
    }),
  },

  fonts: { 
    // body: 'SFPro', // Use sua fonte para o corpo do texto
    // heading: 'SFPro',   // E também para os títulos, se desejado 
    body: 'SfDisplayRegular', // Use sua fonte para o corpo do texto
    heading: 'SfDisplayRegular',   // E também para os títulos, se desejado 
  },

});