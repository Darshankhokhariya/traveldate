import SelectTwo from "@/component/inputs/SelectTwo";
import { filterAge, filterBodyType } from "@/constant/gender";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";

function Filter(props) {
  const { handleClick, values, gender, handleChange, countries, languageData } = props


  return (
    <>
      <div className="px-5">
        <div className="flex flex-col md:flex-row items-center-start md:justify-between md:items-center">
          <h1 className="text-xl md:text-2xl font-medium">
            What are you looking for?
          </h1>

          <div className="flex items-center  gap-5 py-8 md:py-10" style={{ display: 'flex' }}>
            <FormControl component="fieldset" style={{ display: 'flex' }} >
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={gender}
                sx={{ display: 'flex' }}
                style={{ display: "flex" }}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio onClick={handleClick} />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio onClick={handleClick} />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="hidden md:block">
            {/* <Input placeholder="Name" /> */}
          </div>
        </div >
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-y-6 md:gap-x-14">
          <SelectTwo data={filterAge} placeHolder="Select Age From" label="label" value={values?.ageFrom} name="ageFrom" onChange={handleChange} />
          <SelectTwo data={filterAge} placeHolder="Select Age To" label="label" value={values?.ageTo} name="ageTo" onChange={handleChange} />
          <SelectTwo data={languageData} placeHolder="Select Language" label="name" value={values.language} name="language" onChange={handleChange} />
          <SelectTwo data={filterBodyType} placeHolder="Select Body type" label="label" value={values.bodyType} name="bodyType" onChange={handleChange} />
          <SelectTwo data={countries} placeHolder="Select Country" label="name" value={values.country} name="country" onChange={handleChange} />
          {/* <SelectTwo data={filterJson} placeHolder="City" label="label" values="value" /> */}
        </div>
      </div >
    </>
  );
}

export default Filter;
