import { WorkData } from "../types/FormTypes";
import { useFormData } from "./FormDataContext";
import { Form, Input, Typography } from "antd";
import { PlusCircleTwoTone, DeleteTwoTone } from "@ant-design/icons";

export default function WorkForm() {
  const { formData, setFormData } = useFormData();

  function handleChange(
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    const updatedWork = [...formData.work];
    updatedWork[index] = {
      ...updatedWork[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      work: updatedWork,
    });
  }

  function handleAddWork() {
    setFormData({
      ...formData,
      work: [
        ...formData.work,
        { company: "", date: "", jobTitle: "", description: "" },
      ],
    });
  }

  function handleRemoveWork(index: number) {
    const updatedWork = [...formData.work];
    updatedWork.splice(index, 1);
    setFormData({
      ...formData,
      work: updatedWork,
    });
  }

  return (
    <div className="bg-white p-3 m-5 w-5/6 rounded-md shadow-md">
      <Typography.Title level={4}>Pengalaman Kerja</Typography.Title>
      <div className="flex flex-row gap-3 justify-end">
        <PlusCircleTwoTone onClick={handleAddWork} />
      </div>
      {formData.work.map((work: WorkData, index: number) => (
        <div key={index}>
          <Form layout="vertical" className="pt-3">
            <div className="flex flex-row gap-5">
              <div className="basis-2/3">
                <Form.Item className="font-semibold" label="Jabatan">
                  <Input
                    value={work.jobTitle}
                    onChange={(e) => handleChange(index, e)}
                    name="jobTitle"
                    className="font-normal shadow-sm"
                    placeholder="Software Developer"
                  />
                </Form.Item>
              </div>
              <div className="basis-1/3">
                <Form.Item className="font-semibold" label="Perusahaan">
                  <Input
                    value={work.company}
                    onChange={(e) => handleChange(index, e)}
                    name="company"
                    className="font-normal shadow-sm"
                    placeholder="PT. Mencari Cinta Sejati"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="basis-2/3">
                <Form.Item className="font-semibold" label="Description">
                  <Input.TextArea
                    value={work.description}
                    onChange={(e) => handleChange(index, e)}
                    name="description"
                    className="font-normal shadow-sm"
                    placeholder="Sebagai pijakan saya dalam bekerja di..."
                  />
                </Form.Item>
              </div>
              <div className="basis-1/3">
                <Form.Item className="font-semibold" label="Date">
                  <Input
                    value={work.date}
                    onChange={(e) => handleChange(index, e)}
                    name="date"
                    className="font-normal shadow-sm"
                    placeholder="April 2021 - sekarang"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex gap-1 flex-row items-center justify-end">
              <DeleteTwoTone onClick={() => handleRemoveWork(index)} />
            </div>
          </Form>
        </div>
      ))}
    </div>
  );
}
