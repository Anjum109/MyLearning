import { useEffect, useState } from 'react';
import Image from 'next/image';
import trash from '../assets/icons/trash.png'
import info from '../assets/icons/info.png'
import ghost from '../assets/icons/Ghost.png'

export default function EditFileUpload() {
    const [files, setFiles] = useState([]);

    const [objectURLs, setObjectURLs] = useState([]);

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files).map((file) => ({
            file,
            order: files.length + 1,
        }));
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const handleDeleteRow = (index) => {
        setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
    };

    const handleDrag = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDrop = (e, targetIndex) => {
        e.preventDefault();
        const sourceIndex = e.dataTransfer.getData('text/plain');
        const newFiles = [...files];
        const [removed] = newFiles.splice(sourceIndex, 1);
        newFiles.splice(targetIndex, 0, removed);
        setFiles(newFiles.map((file, index) => ({ ...file, order: index + 1 })));

        console.log('Changed Orders:', newFiles.map((file) => file.order));
    };

    useEffect(() => {
        const urls = files.map((file) => URL.createObjectURL(file.file));
        setObjectURLs(urls);

        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [files]);


    return (
        <div className="flex flex-col items-start">

            {files.length > 0 && (
                <div className='  w-full'>
                    <div>
                        <h1 className='font-semibold text-[14px]'>Uploads</h1>
                        <table className='mt-3 w-full'>
                            <thead>
                                <tr className='flex justify-between w-full'>
                                    <th className='font-semibold text-[12px] text-[#6B7280] text-start'>File Title</th>
                                    <th className='font-semibold text-[12px] flex gap-1 text-[#6B7280] text-end'><span>Thumbnail</span> <span><Image src={info} alt='img' /> </span></th>

                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file, index) => (
                                    <tr
                                        key={index}
                                        className="flex justify-between w-full mt-2"
                                        onDrop={(e) => handleDrop(e, index)}
                                        onDragOver={(e) => e.preventDefault()}
                                        data-index={index}
                                    >
                                        <td className="flex items-center justify-start w-[100%] gap-2">
                                            <button>
                                                <Image src={ghost} alt="ghost" />
                                            </button>
                                            {objectURLs[index] ? (
                                                <img
                                                    src={objectURLs[index]}
                                                    alt="Uploaded file"
                                                    className="max-w-xs w-[48px] h-[64px]"
                                                    draggable
                                                    onDragStart={(e) => handleDrag(e, index)}
                                                />
                                            ) : (
                                                <div>Loading...</div>
                                            )}
                                            <div className="flex flex-col">
                                                <span className="text-[12px] font-normal">
                                                    {file.file.name}
                                                </span>
                                                <span className="text-[#6B7280] text-[12px] ml-1 truncate">
                                                    {`${(file.file.size / 1024).toFixed(2)} KB`}
                                                </span>
                                            </div>
                                        </td>
                                        <td className='flex items-center justify-end w-[100%] gap-3'>

                                            <div className='flex gap-3'> <input type="radio" name={`radio-${index}`} className="radio radio-error" />
                                                <button onClick={() => handleDeleteRow(index)}>
                                                    <Image src={trash} alt='trash' />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <label htmlFor="file-upload" className="my-2 cursor-pointer text-[12px]  font-normal text-[#6B7280] w-full text-center py-12 border border-dashed">
                Drop your product list file here, or <span className='text-[#FF4E0B]'>click to browse</span>
                <br />
                <span className='text-[#9CA3AF]'>1200 x 1600 (3:4) recommended, up to 10MB each</span>
            </label>
            <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
                multiple
            />
        </div>
    );
}