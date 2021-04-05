import requestIp from "request-ip";

export const useIp = (req, res, next) => {
  req.clientIp = requestIp.getClientIp(req);
  next();
};
