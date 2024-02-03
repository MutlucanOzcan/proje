export default function Roles() {
    const [selectedRole, setSelectedRole] = useState(
      "Which role random perks do you want. Please select above. "
    );
  
    function handleSelect(selectedButton) {
      // selectedButton => survivor , killer
      setSelectedRole(selectedButton);
      console.log(selectedRole);
    }
  
    return (
      <div>
        <ul className="grid grid-cols-2 justify-items-center">
          <RoleButtons onSelect={() => handleSelect("survivor")}>
            Survivor
          </RoleButtons>
          <RoleButtons onSelect={() => handleSelect("killer")}>
            Killer
          </RoleButtons>
        </ul>
        {selectedRole}
      </div>
    );
  }