import ApiResponse from "../utils/ApiResponse.js";

const healthCheckHandler = async (req, res, next) => {
  try {
    return res
      .status(200)
      .json(new ApiResponse(200, "Health check successful."));
  } catch (error) {
    next(error); 
  }
};

export default healthCheckHandler;