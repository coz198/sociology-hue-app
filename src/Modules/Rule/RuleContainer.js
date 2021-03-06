import React, {Component} from 'react';
import {Container, Content, Item, Left, Right, Button, Input} from 'native-base';
import general from '../../Styles/generalStyle';
import {
    FlatList, Image, Linking, RefreshControl, Text, TouchableOpacity, View, Animated, StatusBar, Easing,
    Keyboard
} from 'react-native';
import HamburgerButton from '../../Commons/HamburgerButton';
class RuleContainer extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{flex: 1}}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/image/logo.png')}
                            style={{height: 30, width: 173}}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <Content style={general.paddingLR}>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Hợp đồng cấp phép cho người dùng cuối (EULA) này là hợp đồng pháp lý giữa bạn (Người Dùng Cuối
                        hoặc bạn) và công ty TNHH KEEeducation (Nhà Cấp Phép, hoặc chúng tôi) về viêc̣ sử dụng ứng dụng
                        Sociology Hue được tải về, cài đặt và sử dụng tại Việt Nam.
                        Chúng tôi cấp phép sử dụng ứng dụng Sociology Hue cho bạn trên cơ sở của EULA này và tuân theo những
                        quy tắc hay chính sách được áp dụng bởi bất kỳ nhà cung cấp cửa hàng ứng dụng nào, chẳng hạn như
                        không giới hạn ở Apple App Store hoặc Google Play Store (Các Quy Định của Bên Thứ Ba). </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        CÁC ĐIỀU KHOẢN ĐÃ THỎA THUẬN
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        NHỮNG ĐIỀU ĐƯỢC CÔNG NHẬN
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Các điều khoản của EULA này áp dụng cho ứng dụng Sociology Hue, bao gồm các bản cập nhật hoặc bổ sung
                        của ứng dụng, trừ khi các bản cập nhật hoặc bổ sung đó đi kèm với các điều khoản riêng, trong
                        trường hợp đó, các điều khoản riêng đó sẽ được áp dụng.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Chúng tôi có thể thay đổi các điều khoản của EULA này bất cứ lúc nào bằng cách thông báo cho bạn
                        về thay đổi đó khi bạn khởi động hoặc sử dụng ứng dụng vào lần tiếp theo. Các điều khoản mới
                        có thể được hiển thị trên màn hình và bạn có thể cần phải đọc và chấp nhận các điều khoản đó để
                        tiếp tục sử dụng Ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Đôi khi các bản cập nhật ứng dụng Sociology Hue có thể được phát hành thông qua nhà cung cấp cửa hàng
                        ứng dụng. Tùy thuộc vào bản cập nhật, bạn có thể không sử dụng được ứng dụng Sociology Hue cho đến khi
                        bạn đã tải về hoặc truyền phiên bản mới nhất của ứng dụng Sociology Hue và chấp nhận các điều khoản
                        mới. Tuy nhiên, ngay cả khi ứng dụng Sociology Hue bị lỗi thời, chúng tôi cũng không có nghĩa vụ phải
                        cập nhật ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Ứng dụng Sociology Hue có thể chứa các liên kết tới hoặc cung cấp một chức năng kết nối với các trang
                        web hoặc các ứng dụng thiết bị di động của bên thứ ba độc lập khác (Các Trang Web của Bên Thứ
                        Ba). Những Trang Web của Bên Thứ Ba này không thuộc quyền kiểm soát của chúng tôi, và chúng tôi
                        không chịu trách nhiệm và không xác thực̣ nội dung, việc quản trị bảo mật dữ liệu và/hoặc chính
                        sách về quyền riêng tư của họ (nếu có). Bạn cần đưa ra đánh giá độc lập của riêng mình về việc
                        tương tác với bất kỳ Trang Web của Bên Thứ Ba nào, bao gồm cả việc mua và sử dụng bất kỳ sản
                        phẩm hay dịch vụ nào có thể truy cập thông qua các trang đó.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bất kỳ từ nào đứng đằng sau các thuật ngữ bao gồm, cụ thể là hoặc ví dụ như hay bất kỳ cụm từ
                        tương tự nào đều được hiểu là để minh họa và sẽ không giới hạn tính tổng quát của những từ chung
                        có liên quan.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        CẤP PHÉP VÀ PHẠM VI CỦA GIẤY PHÉP
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Sau khi xem xét việc bạn đồng ý tuân thủ các điều khoản của EULA này, chúng tôi sẽ cấp cho bạn
                        một giấy phép không thể chuyển nhượng, không độc quyền để sử dụng ứng dụng Sociology Hue trên (các)
                        điện thoại thông minh hoặc (các) máy tính bảng (Thiết Bị) của bạn, tuân theo các điều khoản này
                        và Quy Tắc của Bên Thứ Ba, được đưa vào EULA này dưới dạng tham khảo. Trong trường hợp có bất kỳ
                        sự mâu thuẫn nào giữa các điều khoản của EULA này và các Quy Tắc của Bên Thứ Ba, các điều khoản
                        của EULA này sẽ được áp dụng. Chúng tôi bảo lưu tất cả quyền khác.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn có thể tải một bản sao của ứng dụng Sociology Hue về các Thiết Bị của bạn để xem, sử dụng và hiển
                        thị ứng dụng Sociology Hue trên các Thiết Bị cho mục đích cá nhân của bạn.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Dữ liệu phi cá nhân hoặc ẩn danh có thể được thu thập tự động để cải thiện chức năng của ứng
                        dụng
                        Sociology Hue. Bạn đồng ý rằng bất kỳ dữ liệu phi cá nhân hoặc ẩn danh nào được thu thập đều có thể
                        được
                        gửi đến các bên khác để xử lý nhằm nâng cao chức năng của ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        CÁC QUY ĐỊNH HẠN CHẾ CỦA GIẤY PHÉP
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Trừ khi được quy định rõ trong EULA này hoặc được cho phép theo bất kỳ luật địa phương nào, bạn
                        đồng ý:
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không sao chép ứng dụng Sociology Hue, trừ trường hợp việc sao chép đó liên quan đến viêc̣ sử dụng
                        ứng dụng Sociology Hue bình thường, hoặc trong trường hợp cần thiết nhằm mục đích sao lưu hoặc bảo mật
                        hoạt động.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không cho thuê, cho mướn, cấp phép lại, cho mươṇ, chuyển đổi, hợp nhất, tích hợp, thay đổi hay
                        sửa đổi ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không làm thay đổi hoặc sửa đổi toàn bộ hay bất cứ phần nào của ứng dụng Sociology Hue, hay cho
                        phép
                        ứng dụng Sociology Hue hoặc bất kỳ phần nào của ứng dụng Sociology Hue được kết hợp hoặc tích hợp với bất kỳ
                        chương trình nào khác.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không tách rời, giải mã, sƣ̉ duṇ g kỹ nghê ̣ đảo ngược hoặc tạo ra các sản phẩm phái sinh dựa
                        trên toàn bộ hoặc bất kỳ phần nào của ứng dụng Sociology Hue hay cố gắng làm bất kỳ hành động nào
                        tương tự ngoại trừ trường hợp các hành động như vậy không thể bị cấm theo luật địa phương, nếu
                        có, miễn là thông tin mà bạn thu được trong các hoạt động đó:
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được tiết lộ hay truyền đạt môṭ cách không cần thiết cho bất kỳ bên thứ ba nào mà không
                        có sự đồng ý trước bằng văn bản của chúng tôi.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được sử dụng để tạo ra bất kỳ ứng dụng Sociology Hue nào tương tự về căn bản với ứng dụng
                        Sociology Hue này.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        CÁC QUY ĐỊNH HẠN CHẾ VỀ SỬ DỤNG ĐƯỢC CHẤP NHÂṆ
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được sử dụng ứng dụng Sociology Hue theo bất kỳ cách bất hợp pháp nào, nhằm bất kỳ mục đích bất
                        hợp pháp nào hoặc theo bất kỳ cách nào không phù hợp với EULA này, hoặc hành động gian lận hay
                        ác ý, ví dụ như, xâm nhập hoặc chèn mã độc, bao gồm cả vi-rút, hoặc dữ liệu độc hại, vào ứng
                        dụng Sociology Hue hoặc bất kỳ hệ điều hành nào.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được vi phạm quyền sở hữu trí tuệ của chúng tôi hoặc của bất kỳ bên thứ ba nào liên quan
                        đến việc sử dụng ứng dụng Sociology Hue của bạn (trong phạm vi việc sử dụng đó không được cấp phép
                        theo EULA này).
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được truyền tải bất kỳ tài liệu nào mang tính phỉ báng, xúc phạm hoặc gây khó chịu liên
                        quan đến việc sử dụng ứng dụng Sociology Hue của bạn.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được sử dụng ứng dụng Sociology Hue theo cách có thể gây ảnh hưởng đến nhƣ̃ng người dùng khác
                        hoặc gây thiệt hại, vô hiệu hóa, làm quá tải, làm hỏng hoặc làm tổn hại các hệ thống hay việc
                        bảo mật của chúng tôi hoặc của bất kỳ bên thứ ba nào liên quan đến ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được đăng các hình ảnh đồ trụy, phản cảm, gây mất đoàn kết trong ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không được đăng các hình ảnh thuộc sở hữu trí tuệ trong ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        QUYỀN SỞ HỮU TRÍ TUỆ
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn thừa nhận rằng tất cả các quyền sở hữu trí tuệ về ứng dụng Sociology Hue ở bất kỳ nơi nào trên
                        thế giới đều thuộc về chúng tôi hoặc những nhà cấp phép của chúng tôi, rằng các quyền trong ứng
                        dụng Sociology Hue là được cấp phép (không phải được bán) cho bạn, và bạn không có quyền nào trong,
                        hoăc̣ đối với ứng dụng Sociology Hue ngoài quyền sử dụng ứng dụng Sociology Hue theo các điều khoản của EULA
                        này.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn thừa nhận rằng bạn không có quyền truy cập vào ứng dụng Sociology Hue ở dạng mã nguồn.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn sẽ không phủ nhận tính hợp lệ của bất kỳ quyền sở hữu trí tuệ nào của chúng tôi được cấp
                        phép theo EULA này, hay phản đối bất kỳ đơn đăng ký quyền sở hữu trí tuệ nào như vậy.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        GIỚI HẠN TRÁCH NHIỆM VÀ BỒI THƯỜNG
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn thừa nhận rằng ứng dụng Sociology Hue không được phát triển để đáp ứng các yêu cầu cá nhân của
                        bạn, và do đó bạn có trách nhiệm đảm bảo rằng các tiêṇ lơị và chức năng của ứng dụng Sociology Hue
                        đáp ứng yêu cầu của bạn. Bạn đồng ý rằng bạn tự mình chịu rủi ro khi sử dụng ứng dụng Sociology Hue.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Chúng tôi chỉ cung cấp ứng dụng Sociology Hue để sử dụng nôị bô ̣ và riêng tư. Bạn đồng ý không sử
                        dụng ứng dụng Sociology Hue cho bất kỳ mục đích thương mại, kinh doanh hay bán lại nào.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Được phép sử dụng và truy cập tạm thời vào ứng dụng Sociology Hue, và chúng tôi có quyền thu hồi hoặc
                        sửa đổi ứng dụng Sociology Hue mà không cần thông báo. Đôi khi chúng tôi có thể hạn chế quyền truy cập
                        vào một số phần của ứng dụng Sociology Hue hoặc toàn bộ ứng dụng Sociology Hue, hoặc quyền tiếp câṇ những
                        người dùng đã đăng ký với chúng tôi. Chúng tôi sẽ không chịu trách nhiệm nếu vì bất kỳ lý do
                        nào đó mà ứng dụng Sociology Hue không có sẵn tại bất kỳ thời điểm nào hoặc trong bất kỳ khoảng thời
                        gian nào.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        TRONG PHẠM VI LUẬT PHÁP CHO PHÉP, ỨNG DỤNG Sociology Hue ĐƯỢC CUNG CẤP MÀ KHÔNG CÓ BẢO ĐẢM, ĐIỀU KIỆN
                        HAY BẢO HÀNH NÀO VỀ TÍNH CHÍNH XÁC, HIỆU SUẤT HAY DỊCH VỤ LIÊN TỤC CỦA ỨNG DỤNG Sociology Hue. CHÚNG
                        TÔI SẼ KHÔNG CHỊU TRÁCH NHIỆM VỀ BẤT KỲ TỔN THẤT HOẶC THIỆT HẠI NÀO PHÁT SINH TƢ̀ ỨNG DỤNG
                        Sociology Hue, TẤN CÔNG TỪ CHỐI DỊCH VỤ PHÂN TÁ N , VI-RÚT HOẶC TÀI LIỆU GÂY HẠI VỀ CÔNG NGHỆ KHÁC
                        CÓ THỂ XÂM HẠI THIẾT BỊ, TRANG THIẾT BỊ MÁY TÍNH, CHƯƠNG TRÌNH MÁY TÍNH, DỮ LIỆU HAY TÀI LIỆU
                        RIÊNG KHÁC CỦA BẠN DO VIỆC SỬ DỤNG ỨNG DỤNG Sociology Hue CỦA BẠN HAY DO VIỆC TẢI BẤT KỲ TÀI LIỆU NÀO
                        ĐƯỢC ĐĂNG TRÊN ĐÓ, HAY BẤT KỲ TRANG WEB NÀO ĐƯỢC LIÊN KẾT VỚI ỨNG DỤNG Sociology Hue. NGOÀI RA, TRONG
                        PHẠM VI PHÁP LUẬT CHO PHÉP, CHÚNG TÔI, CÁC THÀNH VIÊN KHÁC CỦA NHÓM CÁC CÔNG TY CỦA CHÚNG TÔI VÀ
                        CÁC BÊN THỨ BA LIÊN KẾT VỚI CHÚNG TÔI QUA ĐÂY TỪ CHỐI RÕ RÀNG:
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        TẤT CẢ CÁC BẢO ĐẢM, ĐIỀU KIỆN, BẢO HÀNH VÀ ĐIỀU KHOẢN KHÁC CÓ THỂ ĐƯỢC BAO HÀM.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        MỌI TRÁCH NHIỆM PHÁP LÝ ĐỐI VỚI BẤT KỲ TỔN THẤT HAY THIỆT HẠI TRỰC TIẾP HOẶC GIÁN TIẾP NÀO DO
                        BẤT KỲ NGƯỜI DÙNG NÀO GÂY RA LIÊN QUAN ĐẾN ỨNG DỤNG Sociology Hue HOẶC LIÊN QUAN ĐẾN VIỆC SỬ DỤNG,
                        KHÔNG CÓ KHẢ NĂNG SỬ DỤNG, HOẶC DO KẾT QUẢ CỦA VIỆC SỬ DỤNG ỨNG DỤNG Sociology Hue VÀ TÀI LIỆU ĐƯỢC
                        ĐĂNG TRÊN ĐÓ, BAO GỒM NHƯNG KHÔNG GIỚI HẠN Ở:
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        TỔN THẤT THU NHẬP HOẶC DOANH THU.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        TỔN THẤT KINH DOANH.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        GIÁN ĐOẠN KINH DOANH.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        MẤT CƠ HỘI KINH DOANH.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        MẤT LỢI NHUẬN HOẶC TRƯỢT HỢP ĐỒNG.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        MẤT KHOẢN TIẾT KIỆM DỰ TÍNH.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        MẤT DỮ LIỆU.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        MẤT LỢI THẾ THƯƠNG MẠI.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        TỐN THỜI GIAN QUẢN LÝ HOẶC LÀM VIỆC.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        CHẤN THƯƠNG HAY TỬ VONG.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        DÙ LÀ GÂY RA DO SAI LẦM CÁ NHÂN (KỂ CẢ SƠ SUẤT), VI PHẠM HỢP ĐỒNG HAY LÝ DO KHÁC, NGAY CẢ KHI CÓ
                        THỂ ĐOÁN TRƯỚC ĐƯỢC.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Trong trường hợp EULA này liên quan đến việc cung cấp hàng hoá hoặc dịch vụ cho người tiêu dùng
                        theo quy định của Luật Bảo Vệ Quyền Lợi Người Tiêu Dùng ngày 17 tháng 11 năm 2011 của Việt Nam
                        (sửa đổi, bổ sung tùy từng thời điểm) và các quy định về thi hành luâṭ (LPCR), không có điều
                        gì trong EULA này có ý loại trừ, hạn chế hoặc sửa đổi bất kỳ điều kiện, bảo đảm, bảo hành hoặc
                        nghĩa vụ nào khác được áp dụng hoặc được trao cho Nhà Cấp Phép theo LPCR, nếu loại trừ, hạn chế
                        hoặc sửa đổi bất kỳ điều kiện, bảo hành hoặc nghĩa vụ nào khác như vậy thì đều là trái pháp
                        luật.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        CHẤM DỨT
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Chúng tôi có thể chấm dứt EULA này ngay lập tức và không có trách nhiệm phải thông báo bằng văn
                        bản cho bạn:
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Nếu bạn vi phạm nghiêm trọng hoặc liên tục EULA này mà bạn không khắc phục (nếu có thể khắc phục
                        được) trong vòng 14 ngày sau khi chúng tôi gửi thông báo bằng văn bản yêu cầu bạn phải làm như
                        vậy;
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Nếu bạn vi phạm bất kỳ quy định nào trong Các Quy Định Hạn Chế của Giấy Phép (mục 3) hay Các Quy
                        Định Hạn Chế về Sƣ̉ Duṇ g Đươc̣ Chấp Nhâṇ (mục 4).
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Nếu chúng tôi quyết định theo quyền tự quyết của mình là không còn hỗ trợ cho ứng dụng Sociology Hue
                        và dừng ứng dụng Sociology Hue vô thời hạn.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Khi chấm dứt vì bất kỳ lí do nào:
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Tất cả các quyền được cấp cho bạn theo EULA này sẽ chấm dứt.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn phải ngừng ngay lập tức tất cả các hoạt động được ủy quyền bởi EULA này, bao gồm cả việc sử
                        dụng ứng dụng Sociology Hue của bạn.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn phải xóa hoặc gỡ bỏ ngay lập tức ứng dụng Sociology Hue khỏi tất cả các Thiết Bị, và hủy ngay lập
                        tức tất cả các bản sao của ứng dụng Sociology Hue mà bạn đang sở hữu, tạm giữ hoặc kiểm soát và xác
                        nhận với chúng tôi rằng bạn đã làm như vậy.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Và sau đó, bạn vẫn còn bị ràng buộc bởi các mục mà theo tính chất hay đặc điểm dư ̣ kiến của
                        nhƣ̃ng muc̣ đó , có thể vẫn còn duy trì hiêụ lưc̣ khi hết thời hạn hay chấm dƣ́ t EULA này,
                        chẳng hạn như, nhưng không giới hạn ở mục 1, 5, 6, 10 và mục này.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        THÔNG TIN LIÊN LẠC GIỮA BẠN VÀ CHÚNG TÔI
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Nếu bạn có bất kỳ mối quan ngại nào về ứng dụng Sociology Hue, hoặc nếu bạn có bất kỳ thắc mắc hay ý
                        kiến, yêu cầu nào liên quan đến EULA này hoặc nếu bất kỳ điều kiện nào trong EULA này yêu cầu
                        bạn phải cung cấp cho chúng tôi thông báo bằng văn bản, xin vui lòng liên hệ với chúng tôi qua
                        điạ chỉ email: Sociology Hue.dev@gmail.com Chúng tôi sẽ xác nhận việc nhận được thông báo này bằng
                        cách liên lạc với bạn bằng văn bản, thường là qua email.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        CÁC TRƯỜNG HỢP NGOÀI TẦM KIỂM SOÁT CỦA CHÚNG TÔI
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Chúng tôi sẽ không chịu trách nhiệm về việc không thể thực hiện hay chậm trễ thực hiện bất kỳ
                        nghĩa vụ nào của mình theo EULA này do bất kỳ hành động hay sự kiện nào ngoài tầm kiểm soát hợp
                        lý của chúng tôi gây ra, bao gồm cả lỗi mạng viễn thông công cộng hay tư nhân (Sự Kiện Ngoài Tầm
                        Kiểm Soát của Chúng Tôi).
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Nếu một Sự Kiện Ngoài Tầm Kiểm Soát của Chúng Tôi diễn ra có ảnh hưởng đến việc thực hiện các
                        nghĩa vụ của chúng tôi theo EULA này:
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Các nghĩa vụ của chúng tôi theo EULA này sẽ được hoãn lại và thời gian thực hiện nghĩa vụ của
                        chúng tôi sẽ được gia hạn thêm một khoảng thời gian bằng thời gian xảy ra Sự Kiện Ngoài Tầm Kiểm
                        Soát của Chúng Tôi.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Chúng tôi sẽ nỗ lực hết sức để tìm một giải pháp để có thể thực hiện các nghĩa vụ của chúng tôi
                        theo EULA này bất chấp sự kiện Sự Kiện Ngoài Tầm Kiểm Soát của Chúng Tôi.
                    </Text>
                    <Text style={[general.textTitleCard, general.paddingLine]}>
                        CÁC ĐIỀU KHOẢN QUAN TRỌNG KHÁC
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Với sự đồng ý của bạn, chúng tôi có thể chuyển các quyền và nghĩa vụ của mình theo EULA này cho
                        một tổ chức khác, nhưng điều này sẽ không ảnh hưởng đến quyền hoặc nghĩa vụ của bạn theo EULA
                        này.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bạn chỉ có thể chuyển quyền hoặc nghĩa vụ của mình theo EULA này cho người khác nếu chúng tôi
                        đồng ý bằng văn bản.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Nếu chúng tôi không nhấn mạnh rằng bạn phải thực hiện bất kỳ nghĩa vụ nào của mình theo EULA
                        này, hoặc nếu chúng tôi không thực thi các quyền của mình đối với bạn, hoặc nếu chúng tôi chậm
                        trễ trong việc làm như vậy, thì điều đó không có nghĩa là chúng tôi đã từ bỏ các quyền của chúng
                        tôi đối với bạn và không có nghĩa là bạn không cần phải tuân thủ những nghĩa vụ đó. Nếu chúng
                        tôi bỏ qua một lỗi của bạn, chúng tôi sẽ chỉ làm như vậy bằng văn bản, và điều đó không có nghĩa
                        là chúng tôi sẽ tự động từ bỏ bất kỳ lỗi nào về sau của bạn.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Mỗi điều kiện trong EULA này đều có hiệu lực riêng biệt. Nếu bất kỳ tòa án hay cơ quan có thẩm
                        quyền nào quyết định rằng bất kỳ điều kiện nào trong số đó là bất hợp pháp hoặc không thể thi
                        hành, các điều kiện còn lại vẫn sẽ có đầy đủ hiệu lực.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        EULA này, nội dung chính và việc lập nên EULA này tuân theo quy định của pháp luật Việt Nam.

                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Không ảnh hưởng đến bất kỳ quyền nộp đơn nào lên bất kỳ tòa án có thẩm quyền nào của các bên để
                        xin biện pháp ngăn chặn, bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến EULA này, bao gồm
                        cả bất kỳ thắc mắc nào liên quan đến sự tồn tại, hiệu lực hoặc chấm dứt EULA này, đều phải được
                        đưa lên và cuối cùng là được giải quyết thông qua phân xử trọng tài tại Singapore theo Quy Tắc
                        Phân Xử Trọng Tài của Trung Tâm Phân Xử Trọng Tài Quốc Tế Singapore (SIAC) trong thời gian có
                        hiệu lực, các quy tắc đó được coi là đươc̣ đưa vào dưới dạng tham chiếu tại điều khoản này.
                        Toà án phải bao gồm một trọng tài được chỉ định bởi chủ tịch của SIAC. Ngôn ngữ để phân xử trọng
                        tài phải là tiếng Anh.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine]}>
                        Bất kể bất kỳ điều gì trong Hợp Đồng này, các bên thừa nhận và đồng ý rằng bất kỳ lúc nào mình
                        cũng có quyền nộp đơn lên bất kỳ tòa án có thẩm quyền nào để xin biện pháp ngăn chặn tạm thời
                        liên quan đến bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến EULA này.
                    </Text>
                    <Text style={[general.textDescriptionCard, general.paddingLine, {marginBottom: 20}]}>
                        EULA này là tuyên bố đầy đủ và riêng biệt về hợp đồng giữa nhà cấp phép và bạn liên quan đến nội
                        dung chính của hợp đồng này, sẽ thay thế mọi thoả thuận, bằng lời nói hay văn bản, trước đây
                        hoặc bất kỳ thông tin liên lạc nào khác có liên quan đến nội dung chính của EULA này. Không có
                        sửa đổi nào trong EULA này có hiệu lực trừ khi sửa đổi đó là bằng văn bản và có chữ ký của nhà
                        cấp phép.
                    </Text>
                </Content>
            </Container>
        );
    }
}


export default RuleContainer;