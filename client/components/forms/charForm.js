import { createRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCharWithImage, fetchLastChar } from "actions/chars";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import Field from "components/general/field";
import { TextField } from "@material-ui/core";

const StyledWrapper = styled.div`
  background-color: #2f3136;
  border-radius: 5px;
  max-width: 360px;
  user-select: none;
  margin-bottom: 1rem;
`;

const CharForm = () => {
  const dispatch = useDispatch();

  const [fileName, setFileName] = useState("");

  const fileUpload = createRef();
  const [photo, setPhoto] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const setFile = (evt) => {
    if (evt.target.files[0]) {
      setPhoto(evt.target.files[0]);
      setValue("fileName", evt.target.files[0].name);
      setImagePreview(URL.createObjectURL(evt.target.files[0]));
    }
  };
  const openUploadDialog = () => {
    fileUpload.current.click();
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      id: 0,
      name: "",
      image: {},
      fileName: "",
    },
  });

  useEffect(() => {
    dispatch(
      fetchLastChar((response) => {
        setValue("id", response[0]?.[0] ? parseInt(response[0]?.[0]) + 1 : 0);
      })
    );
  }, [])


  const save = async (data) => {
    try {
      let bodyFormData = new FormData();
      bodyFormData.set("id", parseInt(data.id));
      bodyFormData.set("name", data.name);
      bodyFormData.append("image", photo);
      await dispatch(
        addCharWithImage(bodyFormData, () => {
          setPhoto(null);
          setFileName("");
          dispatch(
            fetchLastChar((response) => {
              setValue("id", response[0]?.[0] ? parseInt(response[0]?.[0]) + 1 : 0);
            })
          );
        })
      );
    } catch (error) {
      alert("Upload must be an image");
    }
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit(save)}>
        <Field errors={errors} required={true} control={control} label="ID" keyValue="id" disabled={true} />
        <Field errors={errors} required={true} control={control} label="Name" keyValue="name" />

        <div style={{ margin: "2rem 0", maxWidth: "700px" }}>
          <div style={{ alignItems: "flex-end" }}>
            <input type="file" ref={fileUpload} name="image" style={{ display: "none" }} onChange={setFile} />
            <Controller
              name="fileName"
              control={control}
              render={({ field }) => (
                <TextField
                  id="fileName"
                  label="Image"
                  variant="outlined"
                  type="text"
                  onClick={openUploadDialog}
                  {...field}
                />
              )}
            />
            <button type="button"onClick={openUploadDialog}>Browse</button>
            {fileName}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledWrapper>
  );
};

export default CharForm;
