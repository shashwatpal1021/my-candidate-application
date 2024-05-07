/* eslint-disable react/prop-types */

import { Typography } from "@mui/material";

const EstimateSalary = ({ minJdSalary, maxJdSalary, CurrencyRupeeIcon }) => {
  return (
    <div className="text-md font-bold[100-200]">
      <Typography>
        Estimated Salary :<CurrencyRupeeIcon fontSize="small" />
        {minJdSalary === null ? 0 : minJdSalary} - {maxJdSalary} LPA ✅
      </Typography>
    </div>
  );
};

export default EstimateSalary;
