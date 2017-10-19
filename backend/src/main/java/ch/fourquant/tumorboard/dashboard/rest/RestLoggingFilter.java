package ch.fourquant.tumorboard.dashboard.rest;


import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@Component
public class RestLoggingFilter implements Filter {
    private static final Logger LOGGER = Logger.getLogger(RestLoggingFilter.class.getName());
    private String logLevel = "info";

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) req;
        String log = String.format("%S: %s", httpRequest.getMethod(), httpRequest.getRequestURL().toString());
        LOGGER.log(Level.parse(logLevel.toUpperCase()), log);
        chain.doFilter(req, res);
    }

    @Override
    public void destroy() {
    }

    @Override
    public void init(FilterConfig arg0) throws ServletException {
    }

}

