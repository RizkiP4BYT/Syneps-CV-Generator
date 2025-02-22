import { EducationData } from "../types/FormTypes";
import { useFormData } from "./FormDataContext";
import { Form, Input, Typography } from "antd";
import { PlusCircleTwoTone, DeleteTwoTone } from "@ant-design/icons";

export default function EducationForm() {
  const { formData, setFormData } = useFormData();

  function handleChange(
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  }

  function handleAddEducation() {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { school: "", date: "", degree: "", description: "" },
      ],
    });
  }

  function handleRemoveEducation(index: number) {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1);
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  }

  return (
    <div className="bg-white p-3 m-5 w-5/6 rounded-md shadow-md">
      <Typography.Title level={4}>Riwayat Pendidikan</Typography.Title>
      <div className="flex flex-row gap-3 justify-end">
        <PlusCircleTwoTone onClick={handleAddEducation} />
      </div>
      {formData.education.map((edu: EducationData, index: number) => (
        <div key={index}>
          <Form layout="vertical" className="pt-3">
            <div className="flex flex-row gap-5">
              <div className="basis-2/3">
                <Form.Item className="font-semibold" label="Sekolah">
                  <Input
                    value={edu.school}
                    onChange={(e) => handleChange(index, e)}
                    name="school"
                    className="font-normal shadow-sm"
                    placeholder="SMA Lorem Ipsum"
                  />
                </Form.Item>
              </div>
              <div className="basis-1/3">
                <Form.Item className="font-semibold" label="Tanggal">
                  <Input
                    value={edu.date}
                    onChange={(e) => handleChange(index, e)}
                    name="date"
                    className="font-normal shadow-sm"
                    placeholder="Agustus 2000"
                  />
                </Form.Item>
              </div>
            </div>
            <Form.Item className="font-semibold" label="Gelar & Jurusan">
              <Input
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                name="degree"
                className="font-normal shadow-sm"
                placeholder="Sarjana Komputer di Universitas Antartika"
              />
            </Form.Item>
            <Form.Item
              className="font-semibold"
              label="Informasi Tambahan (Optional)"
            >
              <Input.TextArea
                value={edu.description}
                onChange={(e) => handleChange(index, e)}
                name="description"
                className="font-normal shadow-sm"
              />
            </Form.Item>
            <div className="flex gap-1 flex-row items-center justify-end">
              <DeleteTwoTone onClick={() => handleRemoveEducation(index)} />
            </div>
          </Form>
        </div>
      ))}
    </div>
  );
}
