import React, {useEffect, FC} from "react";
import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { EmotionCache } from "@emotion/cache";
import createEmotionCache from "../createEmotionCache";
import { Root } from "../components/Root"

import { CacheProvider } from "@emotion/react";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

const App: FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme={true} />
       <Root> <Component {...pageProps} /></Root>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;