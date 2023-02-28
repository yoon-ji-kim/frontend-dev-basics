package ch08.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="response") //xml messageconverter가 알수 있게 
public class XmlResult {
	private String result;	/*success or fail */
	private GuestbookVo data;    /* xml data를 바꿔서 할 수 없어 success 했다면 set */
	private String message; /* fail 했으면 set success 시에는 null*/
	
	public String getResult() {
		return result;
	}
	public GuestbookVo getData() {
		return data;
	}
	public String getMessage() {
		return message;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public void setData(GuestbookVo data) {
		this.data = data;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public XmlResult() {}
	private XmlResult(GuestbookVo data) {
		this.result = "success";
		this.data = data;
	}
	
	private XmlResult(String message) {
		this.result = "fail";
		this.message = message;
	}
	
	public static XmlResult success(GuestbookVo data) {
		//성공시 success 함수 불러서 사용
		return new XmlResult(data);
	}
	
	public static XmlResult fail(String message) {
		//실패시
		return new XmlResult(message);
	}
	
	//embbed 객체는 내부 또는 외부에 만들어서 사용
	@XmlRootElement(name="data")
	public static class GuestbookVo {
		private Long no;
		private String name;
		private String password;
		private String message;
		private String RegDate;
		public Long getNo() {
			return no;
		}
		public void setNo(Long no) {
			this.no = no;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public String getRegDate() {
			return RegDate;
		}
		public void setRegDate(String regDate) {
			RegDate = regDate;
		}
	}
}
