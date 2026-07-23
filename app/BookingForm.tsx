"use client";

import { FormEvent, useState } from "react";

type BookingDetails = {
  ownerName: string;
  phone: string;
  petType: string;
  weight: string;
  coat: string;
  service: string;
  preferredTime: string;
  note: string;
};

const initialBooking: BookingDetails = {
  ownerName: "",
  phone: "",
  petType: "",
  weight: "",
  coat: "日常护理",
  service: "轻松洗护",
  preferredTime: "",
  note: "",
};

export function BookingForm() {
  const [booking, setBooking] = useState<BookingDetails>(initialBooking);
  const [submittedBooking, setSubmittedBooking] = useState<BookingDetails | null>(null);

  function updateBooking(field: keyof BookingDetails, value: string) {
    setBooking((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedBooking(booking);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form-header">
        <div>
          <span>线上预约</span>
          <h3>填写护理需求</h3>
        </div>
        <small>提交后营业时间内确认</small>
      </div>

      <div className="form-grid">
        <label>
          <span>联系人</span>
          <input
            required
            type="text"
            value={booking.ownerName}
            onChange={(event) => updateBooking("ownerName", event.target.value)}
            placeholder="例如：小林"
          />
        </label>
        <label>
          <span>联系电话</span>
          <input
            required
            type="tel"
            value={booking.phone}
            onChange={(event) => updateBooking("phone", event.target.value)}
            placeholder="方便确认档期"
          />
        </label>
        <label>
          <span>宠物品种</span>
          <input
            required
            type="text"
            value={booking.petType}
            onChange={(event) => updateBooking("petType", event.target.value)}
            placeholder="例如：比熊 / 布偶猫"
          />
        </label>
        <label>
          <span>体重</span>
          <input
            required
            type="text"
            value={booking.weight}
            onChange={(event) => updateBooking("weight", event.target.value)}
            placeholder="例如：6kg"
          />
        </label>
        <label>
          <span>毛况</span>
          <select value={booking.coat} onChange={(event) => updateBooking("coat", event.target.value)}>
            <option>日常护理</option>
            <option>轻微打结</option>
            <option>换毛明显</option>
            <option>敏感皮肤</option>
            <option>需要造型</option>
          </select>
        </label>
        <label>
          <span>预约项目</span>
          <select value={booking.service} onChange={(event) => updateBooking("service", event.target.value)}>
            <option>轻松洗护</option>
            <option>蓬松焕毛</option>
            <option>精致造型</option>
            <option>接送预约</option>
          </select>
        </label>
        <label className="form-wide">
          <span>期望时间</span>
          <input
            required
            type="datetime-local"
            value={booking.preferredTime}
            onChange={(event) => updateBooking("preferredTime", event.target.value)}
          />
        </label>
        <label className="form-wide">
          <span>备注</span>
          <textarea
            value={booking.note}
            onChange={(event) => updateBooking("note", event.target.value)}
            placeholder="可填写性格、是否怕吹风、需要重点护理的位置"
            rows={3}
          />
        </label>
      </div>

      <button className="button button-primary booking-submit" type="submit">
        提交预约
      </button>

      {submittedBooking ? (
        <div className="booking-success" role="status">
          <strong>预约信息已收到</strong>
          <span>
            {submittedBooking.petType} / {submittedBooking.service} / {submittedBooking.preferredTime.replace("T", " ")}
          </span>
        </div>
      ) : null}
    </form>
  );
}
