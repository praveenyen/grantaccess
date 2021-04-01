const catchAsync = require('./error/appError');
exports.grantAccess = (roles) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return next(new AppError('You are not logged in! Please login to get access.', 401));
            }
            if (!(req.user.roles && roles.some(r => req.user.roles.includes(r.toUpperCase())))) {
                return next(new AppError('Access Forbidden', 403));
            }
            next();
        }

        catch (error) {
            next(error);
        }
    }
}