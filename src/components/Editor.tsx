
interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    return (
        <textarea
          className="editor"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Editor;