import React, { useState, useEffect } from "react";
import {Button, Input} from "reactstrap"
import "./Users.css"

export default function SearchForm(props) {
    const [query, setQuery] = useState("");
    
    const handleChange = (event) => {
      setQuery(event.target.value)
      props.setFilterState(query)
    };
  
  
    return (
      <div className="search-form">
        <form>
          <label>
            Search:
            <Input className="search-input" type="text" value={query} onChange={handleChange} />
          </label>
          <Button className="submit-button" outline color="warning">Submit</Button>
        </form>
      </div>
    );
  }
  