import ReactMarkdown from 'react-markdown';

interface PreviewProps {
    value: string;
}

const Preview: React.FC<PreviewProps> = ({ value }) => {
    return (
        <div className='preview'>
            <ReactMarkdown>{value}</ReactMarkdown>
        </div>
    );
};

export default Preview;