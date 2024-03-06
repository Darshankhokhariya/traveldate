import Input from "@/component/inputs/Input";
import Textarea from "@/component/inputs/Textarea";
import Mobilenav from "@/component/navbar/Mobilenav";
import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

function index() {
  return (
    <>
      <Sidebar>
        <Mobilenav />
        <div>
          <div className="max-w-4xl m-auto space-y-4 px-3">
            <input
              type="text"
              className="w-full py-2 rounded-md shadow px-3"
              placeholder="Subject"
            />
            <textarea
              placeholder="Description"
              className="w-full shadow rounded-md px-3 py-3"
              rows={10}
            />
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default index;
