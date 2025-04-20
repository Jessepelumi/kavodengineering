import { CustomButton } from "@/components/shared/customButton";
import Image from "next/image";

export const ConsultationSuccessComponent = ({
  onDismiss,
}: {
  onDismiss: () => void;
}) => {
  return (
    <div className="h-dvh flex justify-center items-center">
      <div className="space-y-3 max-w-[85%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[29%]">
        <div className="bg-secondary-500 w-fit p-4 rounded-full">
          <Image src="/svg/check.svg" alt="Success" height={32} width={32} />
        </div>
        <div>
          <h3 className="text-4xl font-bold">Thank You</h3>
          <h3 className="text-4xl font-bold">for Your Request!</h3>
        </div>

        <p className="text-[14px] leading-4">
          We have received your consultation request and a member of our team will
          respond to you very soon.
        </p>
        <div className="h-5"></div>
        <CustomButton onClick={onDismiss} className="w-full py-3.5">
          Dismiss
        </CustomButton>
      </div>
    </div>
  );
};
