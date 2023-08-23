import BackDrop from "@/components/UI/BackDrop";
import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useState } from "react";

const ProfilePictureUploadPreview = (props) => {
  const [pictureSize, setPictureSize] = useState(320);
  const { selectedImageData, profilePictureUploadPreviewHandler, token } =
    props;
  const [selectedImage, setSelectedImage] = useState(selectedImageData);

  const handleChange = (event) => {
    setPictureSize(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile !== selectedImageData) {
      setSelectedImage(selectedFile);
    }
  };

  const uploadPictureHandler = async () => {
    const formData = new FormData();
    formData.append("profilepicture", selectedImage);

    try {
      const response = await fetch(
        "https://api.calladoc247.net/api/v1/customer/changeprofilepicture",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let responseData = await response.json();
      console.log("http response", responseData);
      console.log("Image uploaded successfully");
      if (response.ok) {
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <BackDrop>
      {" "}
      <div className="relative animateSlideUp space-y-5 pt-4  h-[550px] w-[95%] z-50 shadow-custom-shadow2 rounded-xl bg-white md:h-[667px] md:w-[600px]">
        <button
          onClick={profilePictureUploadPreviewHandler}
          className="absolute top-10 right-5 w-[18px] w-[18px]"
        >
          <Image
            src="/images/icon/close.svg"
            alt="close-icon"
            className="w-full h-full"
            priority
            loading="eager"
            width={18.88}
            height={18.88}
          />
        </button>
        <p className="text-custom9 text-[17px] mb-7 mt-3 font-semibold text-center md:text-[25px]">
          Upload Photo
        </p>{" "}
        <div className="w-full h-[300px] bg-ash flex justify-center items-center md:h-[400px]">
          <div className="flex justify-center items-center h-[200px] w-[200px] rounded-full overflow-hidden border border-custom9 md:h-[320px] md:w-[320px]">
            {selectedImage && (
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="profile-picture-change"
                style={{
                  width: `${pictureSize}px`,
                  height: `${pictureSize}px`,
                }}
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
        <div className="flex space-x-4 px-8">
          {" "}
          <input
            type="range"
            name="volume"
            min="0"
            max="320"
            step="10"
            value={pictureSize}
            onChange={handleChange}
            className="w-full slider"
          />
          <p className="custom9 text-[20px] font-medium">{`${pictureSize}%`}</p>
        </div>
        <div className="flex justify-center h-[40px] space-x-2 md:space-x-5 md:h-[54px]">
          {/* <div className="flex justify-center items-center bg-ash6 rounded-full space-x-2 w-[40%] h-full md:w-[23%]"> */}{" "}
          <div className="w-[55%] h-full md:w-[32%] ">
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              id="fileInput"
              name="fileInput"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="fileInput"
              className="h-full w-full flex justify-center items-center bg-ash6 rounded-full space-x-2 rounded-full cursor-pointer"
            >
              <p className="text-sm text-white md:text-[18px]">Change Photo</p>
              <div className="w-[10px] h-[10px]">
                <Image
                  src="/images/icon/picture-upload-icon.svg"
                  alt="picture-upload-icon.svg"
                  className="h-full w-full"
                  loading="eager"
                  priority
                  width={10}
                  height={10}
                />
              </div>
            </label>{" "}
          </div>
          <button
            onClick={uploadPictureHandler}
            className="flex justify-center space-x-2 items-center border border-ash4 rounded-full w-[40%] h-full md:w-[23%]"
          >
            <p className="text-ash text-sm md:text-[18px]">Upload</p>
            <div className="w-[10px] h-[10px]">
              <Image
                src="/images/icon/edit-gray-icon.svg"
                alt="edit-icon"
                className="h-full w-full"
                loading="eager"
                priority
                width={10}
                height={10}
              />
            </div>
          </button>
          {/* <input
          placeholder="Hello"
            aria-label="Upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />{" "} */}
          {/* </div> */}
          {/* {selectedImage && (
        <div className="mt-4">
          <img src={selectedImage} alt="Selected" className="max-w-full h-auto" />
        </div>
      )} */}
          {/* <button className="flex justify-center items-center bg-ash6 rounded-full space-x-2 w-[40%] h-full md:w-[23%]">
            <p className="text-sm text-white md:text-[18px]">Upload</p>
            <div className="w-[10px] h-[10px]">
              <Image
                src="/images/icon/picture-upload-icon.svg"
                alt="picture-upload-icon.svg"
                className="h-full w-full"
                loading="eager"
                priority
                width={10}
                height={10}
              />
            </div>
          </button> */}
        </div>
      </div>{" "}
    </BackDrop>
  );
};
export default ProfilePictureUploadPreview;
