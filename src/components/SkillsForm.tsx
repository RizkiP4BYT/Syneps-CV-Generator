// SkillsForm.tsx
import { skillsData } from "../types/FormTypes";
import { useFormData } from "./FormDataContext";
import { Form, Input, Typography, InputNumber } from "antd";
import { PlusCircleTwoTone, DeleteTwoTone } from '@ant-design/icons';

export default function SkillsForm() {
    const { formData, setFormData } = useFormData();

    function handleChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const updatedSkills = [...formData.skills];
        updatedSkills[index] = {
            ...updatedSkills[index],
            [name]: value,
        };
        setFormData({
            ...formData,
            skills: updatedSkills,
        });
    }

    function handleAddSkills() {
        setFormData({
            ...formData,
            skills: [...formData.skills,
            { skill: '', rating: 0 }
            ],
        });
    }

    function handleRemoveSkills(index: number) {
        const updatedSkills = [...formData.skills];
        updatedSkills.splice(index, 1);
        setFormData({
            ...formData,
            skills: updatedSkills,
        });
    }

    function handleRateChange(index: number, value: number) {
        const updatedSkills = [...formData.skills];
        updatedSkills[index] = {
            ...updatedSkills[index],
            rating: value,
        };
        setFormData({
            ...formData,
            skills: updatedSkills,
        });
    }

    return (
        <div className='bg-white p-3 m-5 w-5/6 rounded-md shadow-md'>
            <Typography.Title level={4}>
                Skills
            </Typography.Title>
            <div className='flex flex-row gap-3 justify-end'>
                <PlusCircleTwoTone onClick={handleAddSkills} />
            </div>
            {formData.skills.map((skills: skillsData, index: number) => (
                <div key={index}>
                    <Form layout='vertical' className='pt-3'>
                        <div className="flex flex-row gap-5">
                            <div className="basis-2/4">
                                <Form.Item className="font-semibold" label="Skill">
                                    <Input
                                        value={skills.skill}
                                        onChange={(e) => handleChange(index, e)}
                                        name="skill"
                                        className="font-normal shadow-sm"
                                        placeholder="React"
                                    />
                                </Form.Item>
                            </div>
                            <div className="basis-2/4 flex items-center justify-center">
                                <Form.Item className="font-semibold" label="Rating">
                                    <InputNumber
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={skills.rating}
                                        onChange={(value) => handleRateChange(index, value!)}
                                        className="font-normal shadow-sm"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='flex gap-1 flex-row items-center justify-end'>
                            <DeleteTwoTone onClick={() => handleRemoveSkills(index)} />
                        </div>
                    </Form>
                </div>
            ))}
        </div>
    )
}