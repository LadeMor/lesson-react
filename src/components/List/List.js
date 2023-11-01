import { useEffect, useState } from "react";
import "./List.css";

const List = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 1
    });

    const [list, setList] = useState([
        {
            id: 1,
            title: "Walk with dog",
            description: "I should walk with my dog",
            priority: 1
        },
        {
            id: 2,
            title: "But some milk",
            description: "I should buy milk",
            priority: 2
        },
        {
            id: 3,
            title: "Go to the gym",
            description: "I should go to the gym",
            priority: 3
        }
      ]);

    const handlePriorityDisplay = (pri) =>{
        switch(pri){
            case 1:
                return "high-priority-block";
            case 2:
                return "medium-priority-block";
            case 3:
                return "low-priority-block";
            default:
                return "default-priority";
        }
    }

    const handleInputChange = (event) => {

        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setList([
            ...list,
            formData
        ])
    }

    return(
        <div>
            <h1>Add task</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <label>Description</label>
                <input
                    type="text" 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                 <label>Priority</label>
                <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button>Submit</button>
            </form>
            <div className="list">
                {list.map((item) => (
                    <div className={`list-item ${handlePriorityDisplay(item.priority)}`} key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List