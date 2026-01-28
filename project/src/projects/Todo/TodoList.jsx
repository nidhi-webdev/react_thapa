import { MdCheck, MdDeleteForever } from "react-icons/md";

// Remove 'key' from props, add 'id' instead
const TodoList = ({ data, id, handleDeletePassing }) => {
    return (
        <ul>
            <li
                key={id}
                className="
    m-[2.4rem]
    text-[20px]
    text-black
    rounded-full
    transition-colors duration-200 ease-in-out
    bg-[#f2f3f4]
    min-w-80 max-w-100
    px-6 py-3
    grid grid-cols-[1fr_auto_auto]
    items-center
    gap-6
  "
            >
                {/* LEFT TEXT */}
                <span className="font-bold self-center">
                    {data}
                </span>

                {/* CHECK BUTTON */}
                <button
                    className="
      w-12 h-12
      flex items-center justify-center
      bg-green-600
      rounded-full
      text-white
      cursor-pointer
      shadow-[0_8px_24px_rgba(149,157,165,0.2)]
    "
                >
                    <MdCheck size={26} />
                </button>

                {/* DELETE BUTTON */}
                <button onClick={() => handleDeletePassing(data)}
                    className="
      w-12 h-12
      flex items-center justify-center
      bg-red-400
      rounded-full
      text-white
      cursor-pointer
      shadow-[0_8px_24px_rgba(149,157,165,0.2)]
    "
                >
                    <MdDeleteForever size={26} />
                </button>
            </li>
        </ul>
    )
}

export default TodoList
