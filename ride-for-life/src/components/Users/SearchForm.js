import React, { useState, useEffect } from "react";
import {Button, Input} from "reactstrap"
import "./Users.css"

export default function SearchForm(props) {
    const [query, setQuery] = useState("");
    console.log(props)
    
    const handleChange = (event) => {
      setQuery(event.target.value)
      props.setFilterState(query)
    };
  
    return (
      <div className="search-form">
        <form>
            <Input className="search-input" type="text" value={query} onChange={handleChange} placeholder="Search by location" />
          <Button className="submit-button" outline color="warning">Submit</Button>
        </form>
      </div>
    );
  }
  